//GraphQL API endpoint
const GraphQLAPIEndpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql';

const BOOKQUERY = `
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


export const fetchData = async() => {
    let response = await fetch(GraphQLAPIEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: BOOKQUERY })
    });
    const data = await response.json();

    return data.data.book.pages;
}