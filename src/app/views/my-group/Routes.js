import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const ClientListPage = Loadable(lazy(() => import('./ClientListPage')));
const MemberSetupPage = Loadable(lazy(() => import('./MemberSetupPage')));


const groupManagementRoutes = [
  { path: '/my-group/member/list', element: <ClientListPage /> },
  { path: '/my-group/member/setup', element: <MemberSetupPage /> },
];

export default groupManagementRoutes;
