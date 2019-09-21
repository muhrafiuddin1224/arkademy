function getBiodata() {
  return {
    name: 'Muhammad Rafiuddin',
    age: '24',
    address: 'Jl. Mampang Prapatan X',
    hobbies: ['Reading', 'Travelling'],
    is_married: false ,
    school: [{
      highSchool: 'SMK Telkom Makassar',
      year_in: 2009,
      year_out: 2012
      major: 'TKJ',
      },{
      university: 'Telkom University'
      year_in: 2012,
      year_out: 2018,
      major: 'computational science'
    }], //Array of object
    skills: [{
      name: 'laravel',
      level: 'beginner'
    },{
      name: 'PHP',
      level: 'beginner'
    },{
      name: 'javascript',
      level: 'beginner'
    }] // Array of object
    interest_in_coding: True,
  }
}
