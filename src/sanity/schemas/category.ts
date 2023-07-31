// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    name: 'category',
    title:'Category',
    type: 'document',
    fields: [{
        name: 'name',
        type: 'string',
        Validation: (rules:any) => rules.required()
        
    }, {
        name: 'slug',
        type: 'slug',
        options: {
            source: 'name',
            
        },
        validation:(rules:any)=>rules.required(),
    }
    ]
}