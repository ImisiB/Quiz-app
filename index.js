const API_KEY = 'Sge6uzhiEW+sDDX6NR+esA==sal0MxtCUkulmgcn';

document.querySelector('.button1').addEventListener('click', () => {
  const url = `https://api.api-ninjas.com/v1/trivia`;
  document.querySelector('.answer').innerHTML = 'Loading...'
  document.querySelector('.questions').innerHTML = ''
  document.querySelector('.button2').style.display = 'none'


  const getQuestion = async() => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      }
    });
  
    const object = await response.json();
    const category = object[0].category;
    const questions = object[0].question;
    const answer = object[0].answer;
    document.querySelector('.answer').innerHTML = ''
    document.querySelector('.category').innerHTML = category
    document.querySelector('.questions').innerHTML = questions
    document.querySelector('.button2').innerText = 'Get answer'
    document.querySelector('.button2').style.display = 'block'
    document.querySelector('.button2').addEventListener('click', () => {
      document.querySelector('.answer').innerHTML = answer
      document.querySelector('.button1').innerText = 'Get another question'
    })
  }
  getQuestion()
})