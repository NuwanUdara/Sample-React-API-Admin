import { Admin, Resource, EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from "./users"
import {PostList, PostEdit, PostCreate} from "./posts"

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// {< Resource name="posts" list={PostList} />}
const App = () => (
   <Admin dataProvider={dataProvider}>
     {< Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />}
    
     {< Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />}
   </Admin>
  );

export default App;