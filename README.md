# Clean Blog Post
https://cleanblogappp.herokuapp.com/

Clean Blog
==========

Installation
------------

To install and run Clean Blog on your local machine, follow these steps:

1.  Clone the repository:

    $ git clone[ https://github.com/your-username/clean-blog.git](https://github.com/dxtaner/CleanBlogApp)

3.  Navigate to the project directory:

    $ cd clean-blog

5.  Install the dependencies:

    $ npm install

7.  Configure the database:

*   Open the `app.js` file.
*   Locate the `mongoose.connect` function and replace the connection string with your MongoDB connection string.

9.  Start the application:

    $ npm start

11.  Access the application in your browser at [http://localhost:3030](http://localhost:3030).

Usage
-----

Once the application is running, you can perform the following actions:

*   View all blog posts by accessing the homepage (`/`).
*   View a specific blog post by accessing `/blogs/:id`, where `:id` is the ID of the blog post.
*   Create a new blog post by submitting the form at `/add_post`.
*   Edit an existing blog post by accessing `/blogs/edit/:id`, where `:id` is the ID of the blog post.
*   Update a blog post by submitting the form at `/blogs/:id`, where `:id` is the ID of the blog post.
*   Delete a blog post by clicking the delete button on the blog post page.

Contributing
------------

Contributions to Clean Blog are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

License
-------

Clean Blog is open-source software licensed under the MIT License.
