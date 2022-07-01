import Head from 'next/head';

export type props = {
  title?: string;
  description?: string;
  url?: string;
};

const HeadMeta: React.FC<props> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || 'MooMark'}</title>
      <meta name='description' content={description?.substring(0, 60) || 'Moomoark meta description'} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title || '정리습관'} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url || 'https://moomark-dev.micalgenus.com/'} />
      <meta property='og:article:author' content='정리습관' />
    </Head>
  );
};

export default HeadMeta;
