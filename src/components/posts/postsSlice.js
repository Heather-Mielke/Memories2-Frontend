import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {id: '1', 
    image: 'https://i.imgur.com/4n70bbi.jpg', 
    caption: "Beautiful Garden", 
    description: "Garden filled with many pink and purple flowers.",
    date: sub(new Date(), { minutes: 10}).toISOString(),
    reactions: {
        heart: 20
    }
},
    {id: '2', 
    image: 'https://i.imgur.com/0xufQqz.jpg', 
    caption: "Home Decor", 
    description: "Home decor with green accents and unique sideboard. Earthy boho feel.",
    date: sub(new Date(), { minutes: 55}).toISOString(),
    reactions: {
        heart: 10
    }
}, 
    {id: '3', 
    image: 'https://i.imgur.com/IBHK9GW.jpg', 
    caption: "Ocean Waves", 
    description: "The ocean waves are my favorite form of Nature",
    date: sub(new Date(), { minutes: 25}).toISOString(),
    reactions: {
        heart: 30
    }
},
    {id: '4', 
    image: 'https://i.imgur.com/tKAoypl.jpg', 
    caption: "Living Room", 
    description: "Home decor with a modern boho look.",
    date: sub(new Date(), { minutes: 5}).toISOString(),
    reactions: {
        heart: 19
    }
},
    {id: '5', 
    image: 'https://i.imgur.com/XrW87X7.jpg', 
    caption: "Bedroom Decor", 
    description: "Home decor for your bedroom. Glam bedding with fur bench and chandeler.",
    date: sub(new Date(), { minutes: 45}).toISOString(),
    reactions: {
        heart: 50
    }
 },
    {id: '6', 
    image: 'https://i.imgur.com/tNhUf5k.jpg', 
    caption: "Desk Setup", 
    description: "Desk setup, favorite room in the house. Easy home decor.",
    date: sub(new Date(), { minutes: 50}).toISOString(),
    reactions: {
        heart: 10
    }
},
    {id: '7', 
    image: 'https://i.imgur.com/FCvq7oN.jpg', 
    caption: "Makeup Brushes", 
    description: "Makeup brushes are a much needed accessory.",
    date: sub(new Date(), { minutes: 4}).toISOString(),
    reactions: {
        heart: 5
    }
},
{id: '8', 
    image: 'https://i.imgur.com/rKDOPhv.jpg', 
    caption: "Family Photos", 
    description: "Family photos with my two best girls.",
    date: sub(new Date(), { minutes: 15}).toISOString(),
    reactions: {
        heart: 80
    }
},
{id: '9', 
    image: 'https://i.imgur.com/wh6U2re.jpg', 
    caption: "Abstract Image", 
    description: "Blue and Red abstract desing.",
    date: sub(new Date(), { minutes: 35}).toISOString(),
    reactions: {
        heart: 85
    }
},
{id: '10', 
    image: 'https://i.imgur.com/wnabcPT.jpg', 
    caption: "Makeup Life", 
    description: "Got my red lipstick, bronzer and lightening bolt earings.",
    date: sub(new Date(), { minutes: 25}).toISOString(),
    reactions: {
        heart: 60
    }
},
{id: '11', 
    image: 'https://i.imgur.com/PP5Kckh.jpg', 
    caption: "Beep Beep",   
    description: "Look out, yellow beetle coming through.",
    date: sub(new Date(), { minutes: 55}).toISOString(),
    reactions: {
         heart: 30
}
},
{id: '12', 
    image: 'https://i.imgur.com/7qHlW67.jpg', 
    caption: "Home Decor", 
    description: "Pink Chairs with fun accent pieces.",
    date: sub(new Date(), { minutes: 85}).toISOString(),
    reactions: {
        heart: 22
}
},
{id: '13', 
    image: 'https://i.imgur.com/sWlOhQ5.jpg', 
    caption: "Yellow Accent Chair", 
    description: "Give your home a pop of color with something like a yellow chair!",
    date: sub(new Date(), { minutes: 15}).toISOString(),
    reactions: {
        heart: 41
    }
},
{id: '14', 
    image: 'https://i.imgur.com/9xMBO0y.jpg', 
    caption: "Father Son Day", 
    description: "Spending the day with Micky Jr.",
    date: sub(new Date(), { minutes: 25}).toISOString(),
    reactions: {
        heart: 60
    }
},
{id: '15', 
    image: 'https://i.imgur.com/ZjSF9L1.jpg', 
    caption: "DIY Anyone?", 
    description: "Getting ready to DIY some thank you cards.",
    date: sub(new Date(), { minutes: 35}).toISOString(),
    reactions: {
        heart: 32
    }
},
{id: '16', 
    image: 'https://i.imgur.com/bJrJTfh.jpg', 
    caption: "Work From Home", 
    description: "Working from home.. I think yes! Love having my own personal space.",
    date: sub(new Date(), { minutes: 18}).toISOString(),
    reactions: {
        heart: 40
    }
}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
            state.push(action.payload)
            },
            prepare(image, caption, description, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        image,
                        caption,
                        description,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            heart: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer