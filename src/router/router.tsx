import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/home/Home';
import PostDetail from '../pages/postDetail/PostDetail';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import UserProfile from '../pages/userProfile/UserProfile';
import Authors from '../pages/authors/Authors';
import CreatePost from '../pages/createPost/CreatePost';
import CategoryPosts from '../pages/categoryPosts/CategoryPosts';
import AuthorPosts from '../pages/authorPosts/AuthorPosts';
import Dashboard from '../pages/dashboard/Dashboard';
import EditPost from '../pages/editPost/EditPost';
import Logout from '../pages/logout/Logout';
import DeletePost from '../pages/deletePost/DeletePost';
import UserProvider from '../context/userContext';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <UserProvider><Layout /></UserProvider>,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'register', element: <Register /> },
			{ path: 'login', element: <Login /> },
			{ path: 'logout', element: <Logout /> },
			{ path: 'profile/:id', element: <UserProfile /> },
			{ path: 'authors', element: <Authors /> },
			{ path: 'create', element: <CreatePost /> },
			{ path: 'myposts/:id', element: <Dashboard /> },
			{ path: 'posts/:id', element: <PostDetail /> },
			{ path: 'posts/:id/edit', element: <EditPost /> },
			{ path: 'posts/:id/delete', element: <DeletePost /> },
			{ path: 'posts/categories/:category', element: <CategoryPosts /> },
			{ path: 'posts/users/:id', element: <AuthorPosts /> },
		],
	},
]);
