/* Metadata structure */
let a = {
    id: { type: 'string', maxLength: 16, minLength: 16 },
    name: { type: 'string', maxLength: 25 },
    date: { type: 'timestamp',  maxLength: 60 },
    owner_id: { type: 'string', maxLength: 16, minLength: 16 },
    schema: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                label: { type: 'string', maxLength: 25 },
                machine_name: { type: 'string', maxLength: 25 },
                type: { type: 'string', maxLength: 16 },
                max_length: { type: 'number' }
            }
        }
    }
}
 
/* News Metadata */
let b = {
    id: '1545412468248DI7',
    name: 'News Metadata',
    date: 'Tue Feb 26 2019 09:05:23 GMT-0600 (Central Standard Time)',
    owner_id: '1546022105100HA3',
    schema: [
        { label: 'Metadata ID', machine_name: 'metadata_id', type: 'string', max_length: 16, required: true },
        { label: 'Metadata Name', machine_name: 'metadata_name', type: 'string', max_length: 16, required: true },
        { label: 'Slugline', machine_name: 'slugline', type: 'string', max_length: 256, required: true },
        { label: 'Created on', machine_name: 'created_on', type: 'timestamp', max_length: 65, required: true },
        { label: 'Author Name', machine_name: 'author_name', type: 'string', max_length: 40, required: true },
        { label: 'Author Last Name', machine_name: 'author_last_name', type: 'string', max_length: 40, required: false },
        { label: 'Author Email', machine_name: 'author_email', type: 'string', max_length: 256, required: false },
        { label: 'Author Link', machine_name: 'author_link', type: 'string', max_length: 256, required: false },
        { label: 'Author Jobtitle', machine_name: 'author_jobtitle', type: 'string', max_length: 75, required: false },
        { label: 'Headline', machine_name: 'headline', type: 'string', max_length: 70, required: true },
        { label: 'Date', machine_name: 'date', type: 'date', max_length: 10, required: true },
        { label: 'Categories', machine_name: 'categories', type: 'array', required: true },
        { label: 'Byline', machine_name: 'byline', type: 'string', max_length: 256, required: true },
        { label: 'Body Text', machine_name: 'body_text', type: 'string', max_length: 32000, required: true },
        { label: 'Location', machine_name: 'location', type: 'string', max_length: 256, required: true },
        { label: 'Source', machine_name: 'source', type: 'string', max_length: 256, required: true },
        { label: 'Latest edit', machine_name: 'latest_edit', type: 'timestamp', max_length: 70, required: true },
        { label: 'Latest editor', machine_name: 'latest_editor', type: 'string', max_length: 100, required: true }
    ]
}
 
/* News Example */
let c ={
    metadata_id: '1545412468248DI7',
    metadata_name: 'News Metadata',
    slugline: 'US-Finance-Fed',
    created_on: 'Tue Feb 26 2019 09:05:23 GMT-0600 (Central Standard Time)',
    source: 'ANM',
    author: 'mjameson',
    author_name: 'Meredith',
    author_last_name: 'Jameson',
    author_email: 'mjameson@gmail.com',
    author_link: 'https://mjameson.com/',
    author_jobtitle: 'Ny Times Reporter',
    headline: 'Fed to halt QE to advert "bubble"',
    date: '26/02/2019',
    categories: [ 'economy', 'finance', 'business', 'central bank', 'monetary policy' ],
    byline: 'By Meredith Jameson',
    body_text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar varius mollis.
                Etiam sed leo non mauris finibus gravida. Cras placerat, nulla nec elementum faucibus,
                turpis nisl vulputate justo, in euismod erat lectus ac ipsum. Vivamus tincidunt turpis et massa sagittis tristique.
                Integer sollicitudin orci non quam rutrum fermentum. Mauris non urna tincidunt, vehicula diam vel, tincidunt arcu.
                Duis consectetur ligula libero. Aenean ultrices elementum ante, sed hendrerit neque porttitor ut. Praesent pharetra vehicula ipsum et lacinia.
                Suspendisse potenti. Pellentesque blandit mi eget mauris sagittis iaculis. Mauris egestas erat quis ligula convallis vulputate.
                Sed malesuada tempus mauris a iaculis. Aliquam sollicitudin ligula ac odio fringilla vestibulum.`,
    location: 'California, USA',
    latest_edit: 'Tue Feb 26 2019 09:05:23 GMT-0600 (Central Standard Time)',
    latest_editor: 'Faruk Muñoz'
}