
const userResolver = {
    Mutation:{

    },
    Query:{
        user: ()=>{
            console.log("Args ::>>");
            return {user:"Hello"};
        }
    }
}

export default userResolver;