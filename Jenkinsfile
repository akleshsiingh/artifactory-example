pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('CHECKOUT') {
          steps{

            script{
              sh 'echo "checkout out to branch ${BRANCH_NAME}"'
              sh 'git checkout ${BRANCH_NAME}'
              sh 'git pull'
            }
          }
        }
        stage('INSTALL') {
          steps{
            script{
              sh 'echo run npm install'
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
