function get_supabase_client() {
    const { createClient } = supabase;
    return createClient('https://jhhabujcthpkgyweeisr.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoaGFidWpjdGhwa2d5d2VlaXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMzE5NzcsImV4cCI6MjA1MjcwNzk3N30.nvwTBWdJ1IZGLN9Qubtoa5ve1pY5aO9HTJMIRRQX5Ts'
    );
}

async function user_login(client, email, password) {
    return await client.auth.signInWithPassword({
        email: email,
        password: password,
    })
}

async function logout(client) {
    await client.auth.signOut()
}

async function fetchArticleIds(client) {
    const { data, error } = await client
         .from('Articles')
         .select('id');
    
    return data.map(({ id }) => id);
}

async function fetchArticle(id, client) {
    const { data, error } = await client
         .from('Articles')
         .select('text')
         .eq('id', id);
    
    return data[0]
}

async function fetchFormQuestionsData(client) {
    const { data, error } = await client
        .from('FormQuestions')
        .select('*, FormQuestionType(*)');
    
    return data;
}

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setText(text, elemId) {
    document.getElementById(elemId).innerText = text;
}

function unique(array) {
    return [... new Set(array)];
}

function difference(a1, a2) {
    return a1.filter(e => !a2.includes(e));
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

export {get_supabase_client, user_login, logout, fetchArticleIds, randChoice, fetchArticle, fetchFormQuestionsData, setText, unique, difference, getQueryParam}
