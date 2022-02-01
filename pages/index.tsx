import {Button, Htag} from '../components';
import {NextPage} from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Some text</Htag>
      <Button appearance="primary">Hello</Button>
      <Button appearance="ghost">Hello</Button>
    </>
  );
};

export default Home;
