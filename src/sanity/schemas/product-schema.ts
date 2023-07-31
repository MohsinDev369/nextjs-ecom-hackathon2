const product = {
    name: 'product',
    title: "products",
    type: "document",
    fields: [
        {
            name: 'name',
            title: "Name",
            type: 'string',

        },
        {
            name: 'slug',
            title: "Slug",
            type: "slug",
            options: { source: 'name' }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspots: true },
            fields: [{
                name: 'alt',
                title: "Alt",
                type: "string"
            }, {
                name: "src",
                title: "Src",
                type:'string'
            }
        ]
        },
        {
            name: 'price',
            title: "Price",
            type: "number",
        },
        {
            name: 'category',
            type: "reference",
            to: [{ type: 'category' }],
            
        },
        {
            name: 'quantity',
            title: "Quantity",
            type: "number",
        },
        {
            name: 'desc',
            title: "Desc",
            type: "text",
        },
        {
            name: 'care',
            title: "Care",
            type: "array",
            of:[{type:"string"}]
        },
]


}
export default product;