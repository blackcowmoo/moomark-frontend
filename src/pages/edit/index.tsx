import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { loginUserState } from '@recoil/userSession';

const PostEditor = dynamic(() => import('@components/PostEditor'), { ssr: false });

const EditPage: NextPage = () => {
  const router = useRouter();
  const { edit, newPost, id } = router.query;
  const { userName } = useRecoilValue(loginUserState);
  const [editorName, setEditorName] = useState<string>('');
  const [isNewPost, setIsNewPost] = useState<boolean>(false);
  useEffect(() => {
    setEditorName(userName || 'null');
    if (!userName) {
      router.back();
    }
  }, [userName]);

  useEffect(() => {
    if (newPost) {
      setIsNewPost(true);
    }
  }, [edit, newPost, id]);
  return <>{userName ? <PostEditor editorName={editorName} isNewPost={isNewPost} text={''} tags={[]} title={''} /> : <div>wrong access</div>}</>;
};

export default EditPage;
