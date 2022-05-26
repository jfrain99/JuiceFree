import type { Component } from 'solid-js';
import {  } from 'solid-js';
import { Router, Routes, Route, Link } from 'solid-app-router';
import styles from './App.module.css';

const Home: Component = () => (
  <>
    <h1>Welcome to this Simple Routing Example</h1>
    <p>Click the links in the Navigation above to load different routes.</p>
  </>
);

const Profile: Component = () => (
  <>
    <h1>Your Profile</h1>
    <p>This section could be about you.</p>
  </>
);

const Settings: Component = () => (
  <>
    <h1>Settings</h1>
    <p>All that configuration you never really ever want to look at.</p>
  </>
);

const App: Component = () => {
  return (
    <>
      <Router>
        <div class={styles.app}>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/settings">Settings</Link>

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
