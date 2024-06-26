import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
    reducerPath: "local/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/'
    }),
    endpoints: build => ({
        searchUsers: build.query({
            query: () => ({
                url: `searc/data`
            })
        })
    })
})