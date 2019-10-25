// Inicializar o módulo.
let nomeapp = "EscolaWebApp";
let modulos = [];
var app = angular.module(nomeapp, modulos);

var homeController = function($scope){
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller("HomeController", homeController);

var alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.data = "";
  $scope.id_endereco = "";
  $scope.id_curso = "";

  $scope.cadastrar = function() {
  alunoApi.cadastrar($scope.aluno)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('AlunoController', alunoController);

// Aluno - Factory
var alunoFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(aluno) {
  return $http.post(baseUrl + "/aluno", aluno);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("alunoApi", alunoFactory);



var campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";

  $scope.cadastrar = function() {
  campusApi.cadastrar($scope.campus)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('CampusController', campusController);

// Campus - Factory
var campusFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(campus) {
  return $http.post(baseUrl + "/campus", campus);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("campusApi", campusFactory);



var cursoController = function($scope){
  $scope.nome= "";
  $scope.turno = "";
  $scope.fk_id_turno = "";

  $scope.cadastrar = function() {
  cursoApi.cadastrar($scope.curso)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('CursoController', cursoController);


// Curso - Factory
var cursoFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(curso) {
  return $http.post(baseUrl + "/curso", curso);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("cursoApi", cursoFactory);



var disciplinaController = function($scope){
  $scope.nome = "";
  $scope.id = "";
  $scope.fk_id_professor = "";

  $scope.cadastrar = function() {
  disciplinaApi.cadastrar($scope.disciplina)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('DisciplinaController', disciplinaController);

// Disciplina - Factory
var disciplinaFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(disciplina) {
  return $http.post(baseUrl + "/disciplina", disciplina);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("disciplinaApi", disciplinaFactory);


var enderecoController = function($scope){
  $scope.logradouro = "";
  $scope.complemento = "";
  $scope.bairro = "";
  $scope.cep = "";
  $scope.numero = "";

  $scope.cadastrar = function() {
  enderecoaApi.cadastrar($scope.endereco)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('EnderecoController', enderecoController);

// Endereco - Factory
var enderecoFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(endereco) {
  return $http.post(baseUrl + "/endereco", endereco);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("enderecoApi", enderecoFactory);

var escolaController = function($scope){
  $scope.nome = "";
  $scope.endereco = "";
  $scope.campus = "";
  $scope.fk_id_endereco = "";
  $scope.fk_id_campus = "";

  $scope.cadastrar = function() {
  escolaApi.cadastrar($scope.escola)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('EscolaController', escolaController);

// Escola - Factory
var escolaFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(escola) {
  return $http.post(baseUrl + "/escola", escola);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("escolaApi", escolaFactory);

var professorController = function($scope){
  $scope.nome= "";
  $scope.endereco = "";

  $scope.cadastrar = function() {
  professorApi.cadastrar($scope.professor)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('ProfessorController', professorController);

// Professor - Factory
var professorFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(professor) {
  return $http.post(baseUrl + "/professor", professor);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("professorApi", professorFactory);

var turmaController = function($scope){
  $scope.nome= "";
  $scope.nome= "";

  $scope.cadastrar = function() {
  turmaApi.cadastrar($scope.turma)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('TurmaController', turmaController);

// Turma - Factory
var turmaFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(turma) {
  return $http.post(baseUrl + "/turma", turma);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("turmaApi", turmaFactory);

var turnoController = function($scope){
  $scope.nome= "";

  $scope.cadastrar = function() {
  turnoApi.cadastrar($scope.turno)
    .then(function(response) {})
    .catch(function(error) {});
  }
}

app.controller('TurnoController', turnoController);

// Turno - Factory
var turnoFactory = function($http) {

var baseUrl = "localhost:5000";

var _cadastrar = function(turno) {
  return $http.post(baseUrl + "/turno", turno);
};

  return {
  cadastrar: _cadastrar
  };
}

app.factory("turnoApi", turnoFactory);
