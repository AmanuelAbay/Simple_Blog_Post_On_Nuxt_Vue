import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPost:[]
        },
        mutations:{
            setPosts(state, post){
                state.loadedPost=post
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){
                return axios.get('https://nuxt-project-d22a6-default-rtdb.asia-southeast1.firebasedatabase.app/posts')
                .then(res => {
                    // lets write the code of conversion
                    const postArray=[]
                    for(const key in res.data){
                        postArray.push( {...res.data[key],id:key});
                    }

                    vuexContext.commit('setPosts',postArray);
                })
                .catch(e => context.error(3))
            },
            setPost(vuexContext,Posts){
                vuexContext.commit('setPosts',Posts)
            }
        },
        getters:{
            loadedPost(state){
                return state.loadedPost
            }
        }
    })
}

export default createStore