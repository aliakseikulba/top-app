import {Button, Htag, P, Tag} from '../components';
import {NextPage} from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Some text</Htag>
      <Button appearance="primary" arrow="down">Hello</Button>
      <Button appearance="ghost" arrow="right">Hello</Button>
      <P size="l">Large</P>
      <P>Medium</P>
      <P size="s">Small</P>
      <Tag color="green" size="s">green</Tag>
      <Tag color="primary" size="s">primary</Tag>
      <Tag color="ghost" size="s">ghost</Tag>
      <Tag color="red" size="m">red</Tag>
      <Tag color="grey" size="s">grey</Tag>
    </>
  );
};

export default Home;
