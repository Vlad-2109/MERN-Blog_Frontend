import Thumbnail1 from './images/blog1.jpg';
import Thumbnail2 from './images/blog2.jpg';
import Thumbnail3 from './images/blog3.jpg';
import Thumbnail4 from './images/blog4.jpg';
import { Data } from './types/dataTypes';

export const DUMMY_POSTS: Data[] = [
	{
		id: '1',
		thumbnail: Thumbnail1,
		category: 'education',
		title: 'This is the title of the very first post on this blog',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui nisi iusto quod voluptatum! Ex quas, obcaecati pariatur aliquid, velit itaque culpa dolores cum odio quia quis veritatis deserunt under',
		authorID: 3,
	},
	{
		id: '2',
		thumbnail: Thumbnail2,
		category: 'science',
		title: 'This is the title of the very second post on this blog',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui nisi iusto quod voluptatum! Ex quas, obcaecati pariatur aliquid, velit itaque culpa dolores cum odio quia quis veritatis deserunt under',
		authorID: 1,
	},
	{
		id: '3',
		thumbnail: Thumbnail3,
		category: 'weather',
		title: 'This is the title of the very third post on this blog',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui nisi iusto quod voluptatum! Ex quas, obcaecati pariatur aliquid, velit itaque culpa dolores cum odio quia quis veritatis deserunt under',
		authorID: 13,
	},
	{
		id: '4',
		thumbnail: Thumbnail4,
		category: 'farming',
		title: 'This is the title of the very last post on this blog',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui nisi iusto quod voluptatum! Ex quas, obcaecati pariatur aliquid, velit itaque culpa dolores cum odio quia quis veritatis deserunt under',
		authorID: 11,
	},
];
