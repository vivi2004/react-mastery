import React from 'react'

function Card({ username = "The King", post = "Former Indian Cricketer" }) {
    // console.log(props); 

    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.pinimg.com/736x/bc/f4/cf/bcf4cf0dd8b026c645019698ba9585c1.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “ The Inspiration of many. Inspiration of many”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card