def CURRENT_BRANCH = ''
pipeline {
    agent any
    stages {

        stage('Pre checkout') {
            steps {
                echo "Hello world"
            }
        }

        stage('Clone repo') {
            steps {
                sh 'pwd'
                git branch: 'main', url: 'https://github.com/otrebla-snake-ita/jenkins-cicd.git'
                sh 'ls -la'
            }
        }

        stage('Stampa branch') {
            steps {
                script {
                    CURRENT_BRANCH = sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
                    echo "Branch corrente: ${CURRENT_BRANCH}"
                }
            }
        }
        
        stage('Install') {
            agent {
                docker {
                    image 'node:20'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --network=host'
                }
            }
            steps { 
                sh '''
                cd ./node-proj
                npm install
                ls -la
                '''
            }
        }

        stage('Lint') {
            agent {
                docker {
                    image 'node:20'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --network=host'
                }
            }
            steps { 
                sh '''
                cd ./node-proj
                npm run lint:ci
                ''' 
            }
        }

        stage('Build Docker Image') {
            agent any
            steps {
                sh '''
                pwd
                whoami
                docker build -t node-api:1.0 ./node-proj
                '''
            }
        }

        stage('Deploy') {
            when {
                expression {
                    return CURRENT_BRANCH == 'develop'
                }
            }
            steps {
                echo 'Deploying to DEV environment'
            }
        }

        stage('Deploy to Production') {
            when {
                expression {
                    return CURRENT_BRANCH == 'main'
                }
            }
            steps {
                echo 'Deploying to PRODUCTION'
            }
        }
    }
    // post {
    //     success {
    //         echo 'OK'
    //         mail to: 'alberto.marinucci@insoore.com',
    //         subject: "Build Success: ${currentBuild.fullDisplayName}.",
    //         body: "The build was successful! Check the logs here: ${env.BUILD_URL}"
    //     }
    //     failure {
    //         echo 'KO'
    //         mail to: 'alberto.marinucci@insoore.com',
    //         subject: "Build failed: ${currentBuild.fullDisplayName}",
    //         body: "The build was failed!. Check the logs here: ${env.BUILD_URL}"
    //     }
    // }
}