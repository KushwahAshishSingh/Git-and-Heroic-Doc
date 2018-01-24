/*


 cmd>       git --version
            cd projectPath
            git init
            ls -a
            git status
            git add .
            git commit -m'message'
 Make Repo on git and follow last 2 steps.....
            git push -u origin master



 SSH key  => secure communucation between 2 comp

  cmd>      ls -al ~/.ssh                                   // for checking current ssh key
            ssh -keygen -t rsa -b 4096 -c 'email add'      // press enter for not setting PSD
            ls -al ~/.sh                                  // it contain the private key
            eval "$(ssh-agent -s)"                        // will give a Agent PID 1639
            ssh -add ~/.ssh/id_rsa

            // for adding go to git, go to ssh page, on terminal
            ~/.ssh/id_rsa.pub
            // and go and paste it on git
  check     ssh -T git@github.com

 */