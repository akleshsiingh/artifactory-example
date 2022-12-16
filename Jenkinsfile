def branch = "development"
pipeline {
    agent any
     tools {nodejs "nodejs"}

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('CHECKOUT') {
          steps{

            script{
              sh 'echo $BRANCH_NAME'
              sh 'echo checkout out to branch ${branch}'
              sh 'git checkout development'
              sh 'git pull'
            }
          }
        }
        stage('INSTALL') {
          steps{
            script{
              sh 'echo run npm install'
              sh 'echo who whoami'
              sh 'whoami'
              sh 'npm i'
            }
          }
        }

        stage('BUILD') {
          steps {
            script{
              sh 'echo building appication'
              sh 'npm run build'
            }
          }
        }

    }
}
