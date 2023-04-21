// import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

// export const PostList = () => (
//     <List>
//         <Datagrid rowClick="edit">
//             <ReferenceField source="userId" reference="users" />
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );


import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField} from "react-admin";

export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.title}
          tertiaryText={(record) => record.body}
        />
      ) : (
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
      )}
    </List>
  );
};