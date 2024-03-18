
const userTypeDef = `#graphql
    type User{
        name:String!
        email:String!
        password:String!
        gender:genderType!
    }

    type Query{
        user:User!
    }

    type Mutation{

    }

    enum genderType{
        MALE
        FEMALE
        OTHER
    }
`;

export default userTypeDef;