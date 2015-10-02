---
layout: blog-page
title: API Testing in Node (with Mocha, SuperTest, and Nock)
date: 2012-10-31
author: Greg Bell
---

## API Testing in Node (with Mocha, Supertest, and Nock)

An important part of the infrastructure here at Mover is our API Server. It presents the simple interface you see and talks to our complex backend infrastructure that does all the work to deal with myriad services we support. Being the good developers that we are we of course have an extensive test suite around the component. In order to isolate the API code for testing we need to mock both the user input and backend responses. Originally I was worried that we would have to write a lot of mocking framework code to deal with this, but it turns out there are some great tools that do exactly what we wanted.

### Mocha

For our overall testing framework we're using[ TJ Holowaychuk][1]'s [Mocha][2] which has been working out really well. Mocha does all the basic things I'd expect in a testing framework and deals nicely with Node's asynchronous nature. I won't tell you too much about Mocha because I think the [documentation][3] is excellent, so you can check that out. (I'm using [Should][4] as an assertion library which lets us do BDD style assertions like `result.should.have.status 200`. And I'll be writing these examples in CoffeeScript since we've been trying that out.)

A basic test case in Mocha looks something like this:

<script src="https://gist.github.com/dangerbell/3996194.js?file=mocha-calculator-example.coffee"></script>
  
The 'describe' sections are basically dividing up your tests and the 'it "should …"' explains what you're trying to test.

When testing async code the callback to your test (`it "should ...", callback`) will take a `done` param which is a function. You can call that function when you've completed all your assertions and Mocha will move on to the next test case.

<script src="https://gist.github.com/dangerbell/3996194.js?file=mocha-async-example.coffee"></script>

Without adding the `done` param Mocha will just move on to the next test without waiting for callbacks and you'll probably see tests pass without anything having been tested. If you specify `done` but don't call it anywhere your test will timeout and throw an error.

### Supertest

Since we're testing a REST API we need to simulate user requests. We could have set up a test server to run our requests against, but there's an alternative in Node. We're using Express which builds on the built-in `http.Server` object. So, since our server is a simple object we can just deal with that object and build our tests around it. This is exactly what [SuperTest][5] does.

SuperTest is an HTTP testing library which has a bunch of convenience methods for doing assertions on headers, statuses and response bodies. The one issue is: how do we pass our server object to SuperTest? In most example code you see for Express it's all one file and you tell the server to listen at the end of the file. In generally this just isn't good architecture long term and in our case it doesn't expose that Express server object ('app') so that we can pass it to our test code. So at Mover we've split things up into a few files make this possible.

###### config.coffee:

<script src="https://gist.github.com/dangerbell/3996194.js?file=express-config.coffee"></script>

###### routes.coffee:

<script src="https://gist.github.com/dangerbell/3996194.js?file=express-router.coffee"></script>

###### app.coffee:

<script src="https://gist.github.com/dangerbell/3996194.js?file=express-app.coffee"></script>

###### server.coffee:

<script src="https://gist.github.com/dangerbell/3996194.js?file=express-server.coffee"></script>

We can start our server with `coffee server.coffee` (or use Supervisor or Forever) and we can pass around the server object by requiring `app.coffee`. I won't commit to saying this method is a best practice for your Express architecture, but it's been working well for us.

With that architecture in mind we can use SuperTest in our Mocha tests like this:

<script src="https://gist.github.com/dangerbell/3996194.js?file=mocha-supertest.coffee"></script>

Here we're validating one of our error cases. If someone doesn't specify the service they want to connect to (like Dropbox, GoogleDrive, or an FTP server) then we need to send them a helpful error message to get them back on track. SuperTest (referred to in this example by the `request` variable) takes our server object and we set what we want to send and where to send it and then specify an expected return result. `post` indicates that we're sending an HTTP POST request to the `/connectors` route. We `set` the `Authorization` header to authenticate our app to Mover and we `send` an empty JSON body.

The `expect` function is checking the response object has the correct status code (400) and the specified response body. We pass the `done` function to `expect` so that the test finishes when the expect call is complete.

### Nock

The last issue in testing our code is that most calls to the API server will end up making a call to our backend. Making requests against a test environment isn't really what we want to do here since we're trying to isolate the API server and only test that piece. Testing with a full environment could show errors that aren't in the API code but are somewhere else in the infrastructure which would make debugging more difficult.

Fortunately there's a great library for mocking responses to HTTP requests called [Nock][6]. Nock intercepts HTTP requests and sends back the response you specify. So in the tests when our API code calls the backend, that request is handled by Nock and it returns the response we need for the test.

A common case the API can't respond to on its own is determining if a folder or database still exists (we generalize to call these collections in Mover). So the API server will need to deal with these missing folder responses from the backend:

<script src="https://gist.github.com/dangerbell/3996194.js?file=mocha-supertest-nock.coffee"></script>

Our use of SuperTest is similar to what we were doing before, but we're using `end` to test our expectations instead of `expect` and I'll talk about that in a sec. The call to Nock happens looks a lot like the call to SuperTest. The initial call to `nock` takes the hostname/port to our backend server and the `get` call specifies what path we'll be calling on our server. The `filteringPath` line is to deal with any URL params. We're not testing that we're getting the right params here, so we can ignore that. If we didn't have the filter we'd have to have something like `"/backend.php?connector_id=#{connector_id}&collection_id=#{collection_id}"` as the parameter to `get` because Nock matches the URL (and body) exactly. `reply` is just specifying what the response code will be, but you can give it a body and headers as well or respond with a file.

As I mentioned earlier, our SuperTest code is slightly different. We're using `end` instead of `expect`. `end` takes a function which will get the response body and we can do any assertions not provided by SuperTest that way. Our assertion in this case (`res.should.have.status 404`) isn't very exciting, the interesting part is the `scope.done()` call. This is verifying that all paths that Nock is supposed to mock have actually been used in the test which is really helpful when tracking down bugs.

That's how we're doing API testing at Mover. If you have any suggestions on how we can improve or if you found this post useful we'd love to hear from you. My email is [greg@mover.io][7]

[1]: http://tjholowaychuk.com/ "TJ Holowaychuk's blog"
[2]: http://visionmedia.github.com/mocha/ "Mocha testing framework"
[3]: http://visionmedia.github.com/mocha/ "Mocha test framework documentation."
[4]: https://github.com/visionmedia/should.js/
[5]: https://github.com/visionmedia/supertest
[6]: https://github.com/flatiron/nock
[7]: mailto:greg@mover.io
