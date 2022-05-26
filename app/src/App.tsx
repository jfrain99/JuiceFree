import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import { Router, Routes, Route, Link } from "solid-app-router";

interface Match {
  title: string
}

const [matches, setMatches] = createSignal([] as Match[]);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "tennis-live-data.p.rapidapi.com",
    "X-RapidAPI-Key": "46f0fdf551msh9094c4f085a134ep184946jsn689833af3b3e",
  },
};

const getMatches = async () => {
  await fetch(
    "https://tennis-live-data.p.rapidapi.com/matches-by-date/2022-05-26",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((response) =>
      localStorage.setItem("matches", JSON.stringify(response))
    );
};

const retrieveMatches = () => {
  const matchStr = localStorage.getItem("matches") || '{}';
  setMatches(JSON.parse(matchStr)?.results?.[0]?.matches ?? []);
};

const logMatches = () => {
  console.log(matches());
};

const Home: Component = () => (
  <>
    <h1>Welcome to this Simple Routing Example</h1>
    <p class="text-4xl">
      Click the links in the Navigation above to load different routes.
    </p>
  </>
);

const InProgress: Component = () => (
  <>
    <div>
      <h1 class="title">In Progress</h1>
      <p class="text-4xl">This section could be about you.</p>
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={getMatches}
      >
        Call API
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={retrieveMatches}
      >
        Retrieve Matches
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={logMatches}
      >
        Log Matches
      </button>
    </div>
    <div>
      <For each={matches()}>
        {(match, i) => {
          return (<>
            <h1>{match.title}</h1>
            <br />
          </>)
        }}
      </For>
    </div>
  </>
);

const Settings: Component = () => (
  <>
    <h1>Settings</h1>
    <p class="text-red-400">
      All that configuration you never really ever want to look at.
    </p>
  </>
);

const App: Component = () => {
  return (
    <>
      <Router>
        <div>
          <div class="flex center">
            <h1 class="text-4xl">Test</h1>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/settings">Settings</Link>
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<InProgress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
