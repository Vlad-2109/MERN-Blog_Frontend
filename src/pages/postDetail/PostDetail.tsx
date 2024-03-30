import { Link } from 'react-router-dom';
import PostAuthor from '../../components/postAuthor/PostAuthor';
import './_postDetail.scss';
import Thumbnail from '../../images/blog22.jpg';

const PostDetail: React.FC = () => {
	return (
		<section className="post-detail">
			<div className="container post-detail__container">
				<div className="post-detail__header">
					<PostAuthor />
					<div className="post-detail__buttons">
						<Link to={'/posts/werwer/edit'} className="btn sm primary">
							Edit
						</Link>
						<Link to={'/posts/werwer/delete'} className="btn sm danger">
							Delete
						</Link>
					</div>
				</div>
				<h1>This is the post title!</h1>
				<div className="post-detail__thumbnail">
					<img src={Thumbnail} alt="" />
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur
					ad nihil officiis libero sunt animi laborum vel laboriosam fugit,
					soluta tenetur perferendis at odit saepe eaque voluptate quaerat enim?
					Saepe facere qui explicabo, voluptatibus sit aspernatur asperiores
					nulla voluptas.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
					dolorum quis aut temporibus libero vel ut omnis facilis id non
					perspiciatis voluptate, ea facere optio asperiores fugiat at delectus
					dolore, doloribus alias sit sapiente iste sequi. Amet, at provident
					corporis delectus modi omnis perferendis, voluptatem quaerat quas
					aperiam pariatur suscipit iure est quo excepturi earum.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum
					perspiciatis facilis unde expedita tempora voluptatem voluptatum autem
					odio maxime dolorem eos nisi quasi, placeat delectus possimus?
					Exercitationem, iste corporis vel repellat rerum facilis veritatis
					deleniti aliquid! Laudantium possimus consectetur quae, dolor
					recusandae et quidem quis facere architecto repellendus eveniet, a
					harum. Consectetur dolor fugit, corporis tempora, aperiam atque nemo
					illum repellendus maiores cum animi quidem nihil quam odio quasi
					obcaecati exercitationem commodi eaque corrupti tenetur doloribus.
					Inventore esse iusto architecto dolore odit iure. Sed maxime cumque
					officia quis nemo velit, asperiores quas autem optio ullam magnam
					consectetur rem deleniti animi cupiditate quos architecto ab?
					Architecto dolore cum autem quia eius.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
					hic voluptate?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cumque
					sit sint ducimus. Accusantium, nam autem ipsam earum molestiae in quos
					deserunt harum, neque corporis pariatur. Quia assumenda unde
					dignissimos ullam molestiae id excepturi corporis quidem. Dolor
					officia reiciendis tenetur quae molestias beatae inventore delectus
					vero, autem aperiam modi, amet hic accusamus. Dignissimos illo
					quisquam magni fugiat voluptatibus debitis quo consectetur nam facere
					totam corporis quos officia non, delectus aliquam nesciunt? Doloremque
					voluptates eum nulla veritatis, inventore omnis eveniet, ipsum quia,
					ut sit nam! Qui tempore molestias aspernatur quibusdam quas
					perferendis necessitatibus quaerat voluptatem hic adipisci eveniet
					similique, esse magni quis laboriosam dignissimos amet mollitia
					libero, iure veniam voluptates. Optio molestias consectetur distinctio
					soluta labore doloremque error porro maiores, odit natus corrupti, vel
					alias ipsa suscipit, officiis ducimus? Impedit veniam labore atque
					sunt iusto sequi enim nisi quasi obcaecati vitae! Quo cupiditate quis
					dolores doloremque exercitationem nesciunt. Commodi optio velit
					dolores aut? Ut commodi, quaerat cupiditate accusamus, numquam at
					libero blanditiis est, nobis quod vero eos ab dolore inventore quasi
					consequuntur ratione. Velit dolorum, odit sequi, quo soluta asperiores
					minus incidunt dignissimos eum iusto quam cumque itaque quisquam a
					maiores doloribus vitae ipsa. Esse quasi corporis eligendi hic, in
					quis.
				</p>
			</div>
		</section>
	);
};

export default PostDetail;
