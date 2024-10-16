import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Nine Lives ARG
        </Heading>
        <p className="hero__subtitle">Do you really know?</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Nine Lives`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <p>hello</p>
      </main>
    </Layout>
  );
}
