import React from "react";
import "./Posts.scss";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Posts = () => {
  return (
    <div className="posts">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Username</span>
            <p>Posted x days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <i class="fa fa-edit"></i>
            </Link>

            <i class="fa fa-trash"></i>
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet. Est nostrum magnam qui eius fugit ab animi
          impedit. A distinctio dolores et adipisci minus non incidunt
          molestiae. In perspiciatis facilis vel nostrum delectus ut vero
          tenetur ut autem aspernatur qui commodi laudantium. Ut expedita velit
          eos repudiandae amet et autem deserunt aut modi galisum ut eaque
          magnam et labore aliquid aut asperiores saepe. Aut ipsum quam vel
          necessitatibus beatae non modi velit. Et sunt nemo ea ipsum modi qui
          rerum ipsam et quia eveniet hic debitis praesentium et blanditiis
          eius. Et laboriosam corrupti ut consequuntur ducimus nam minima autem
          hic velit beatae in labore tempore ea aliquid aspernatur vel amet
          natus. Sit pariatur minima nam nisi dignissimos ad error minima. Vel
          voluptates amet nam veritatis omnis aut sint porro aut magnam
          laboriosam ut fugiat sapiente.Lorem ipsum dolor sit amet. Est nostrum
          magnam qui eius fugit ab animi impedit. A distinctio dolores et
          adipisci minus non incidunt molestiae. In perspiciatis facilis vel
          nostrum delectus ut vero tenetur ut autem aspernatur qui commodi
          laudantium. Ut expedita velit eos repudiandae amet et autem deserunt
          aut modi galisum ut eaque magnam et labore aliquid aut asperiores
          saepe. Aut ipsum quam vel necessitatibus beatae non modi velit. Et
          sunt nemo ea ipsum modi qui rerum ipsam et quia eveniet hic debitis
          praesentium et blanditiis eius. Et laboriosam corrupti ut consequuntur
          ducimus nam minima autem hic velit beatae in labore tempore ea aliquid
          aspernatur vel amet natus. Sit pariatur minima nam nisi dignissimos ad
          error minima. Vel voluptates amet nam veritatis omnis aut sint porro
          aut magnam laboriosam ut fugiat sapiente.Lorem ipsum dolor sit amet.
          Est nostrum magnam qui eius fugit ab animi impedit. A distinctio
          dolores et adipisci minus non incidunt molestiae. In perspiciatis
          facilis vel nostrum delectus ut vero tenetur ut autem aspernatur qui
          commodi laudantium. Ut expedita velit eos repudiandae amet et autem
          deserunt aut modi galisum ut eaque magnam et labore aliquid aut
          asperiores saepe. Aut ipsum quam vel necessitatibus beatae non modi
          velit. Et sunt nemo ea ipsum modi qui rerum ipsam et quia eveniet hic
          debitis praesentium et blanditiis eius. Et laboriosam corrupti ut
          consequuntur ducimus nam minima autem hic velit beatae in labore
          tempore ea aliquid aspernatur vel amet natus. Sit pariatur minima nam
          nisi dignissimos ad error minima. Vel voluptates amet nam veritatis
          omnis aut sint porro aut magnam laboriosam ut fugiat sapiente.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Posts;
