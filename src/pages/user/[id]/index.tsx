import { useRouter } from 'next/router';
import UserProfile from '@components/User/UserProfile';

const UserPage = () => {
  const { user } = useRouter().query;
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default UserPage;
