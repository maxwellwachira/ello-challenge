//GraphQL API endpoint
export const GraphQLAPIEndpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql';

//Query Schema
export const BOOKQUERY = `
    {
        book {
            pages {
                content
                tokens {
                    position
                    value
                }
            }
        }
    }
`;

