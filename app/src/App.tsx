import type { Component } from 'solid-js';
import {  } from 'solid-js';
import { Router, Routes, Route, Link } from 'solid-app-router';

const Home: Component = () => (
  <>
    <h1>Welcome to this Simple Routing Example</h1>
    <p class="text-4xl">Click the links in the Navigation above to load different routes.</p>
  </>
);

const Profile: Component = () => (
  <>
    <h1>Your Profile</h1>
    <p class="text-4xl">This section could be about you.</p>
  </>
);

const Settings: Component = () => (
  <>
    <h1>Settings</h1>
    <p class="text-red-400">All that configuration you never really ever want to look at.</p>
  </>
);

const App: Component = () => {
  return (
    <>

      <Router>
        <div>
          <div>
          <h1 class="text-4xl">Test</h1>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/settings">Settings</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
