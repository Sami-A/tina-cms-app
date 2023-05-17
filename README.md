## Tina CMS App

With reusable blocks, you can unleash your creativity and build amazing designs in no time. Each block is a component that you can add to your page multiple times with just a click. You can also sort the blocks in any order you want with a simple drag and drop.

### Description
To build my website with Tina CMS, I started by creating a schema that defines the structure and shape of my content. In this schema, I added a collection called **homePage**, which represents the main page of my site. The collection has a content model that specifies the templates that I can use to create different sections of the page. Each template has a set of blocks that can be reused and customized. The blocks are defined in a separate folder named **blocks**, where I can also create new blocks as needed. The blocks are essentially custom components that I can edit with Tina CMS and assemble pages like a site-builder.

To store the data for the home page, I created a folder called **content** in the root directory of my project. Inside this folder, I created a file named **homePage.json**, where I can write the content for each block in JSON format. I preferred **JSON** over **Markdown** or **MDX** because it gives me more flexibility and control over the data.

To design the page, I needed to access and manipulate the data from the homePage(page/index.tsx) file. Tina CMS made this easy by providing me with a **GraphQL API** that I can use to query and mutate the data. I used this API inside the **getStaticProps** function in Next.js, which fetches the data at build time and passes it as props to the page component.

Then, I displayed the data inside the components using props and React hook(useTina--provided by Tina CMS). I also enabled contextual editing by wrapping the components with Tina CMS forms and fields. This way, I can see my content changes in real-time as I edit them on the page.

Finally, I deployed the site to **TinaCMS Cloud**, which connects my site to GitHub and handles authentication and authorization for me.


