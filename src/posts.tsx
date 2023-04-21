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


import { useMediaQuery} from "@mui/material";
import { List, SimpleList, Datagrid, TextField, ReferenceField, Edit, EditButton, ReferenceInput, SimpleForm, TextInput, Create} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];


export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.title}
          tertiaryText={(record) => record.body}
        />
      ) : (
        
        <Datagrid>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            < EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id"  disabled/>
            <TextInput source="title" />
            <TextInput source="body"  multiline rows={5}/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body"  multiline rows={5}/>
        </SimpleForm>
    </Create>
);