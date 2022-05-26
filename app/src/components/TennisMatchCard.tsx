import { Component } from 'solid-js';

interface player {
  first_name: string
  last_name: string
}
interface Props {
  title: string
  away: player
  home: player
}

const Header: Component<Props> = (props) => {
  return (
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {props.away.first_name} {props.away.last_name} vs. {props.home.first_name} {props.home.last_name}
        </h1>
      </div>
    </header>
  );
};

export default Header;