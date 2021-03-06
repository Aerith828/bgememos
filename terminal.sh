#DIVERS
cd <chemin du fichier> # se déplacer
node <nom du fichier> # lancer un script node

#GIT
git init                                                # initialiser un projet git
git add <nom du fichier/dossier>                        # ajouter les modifications au prochain commit
git commit -m "<message à ajouter au commit>"           # Sauvegarde les modifications précedemment ajouter
git status                                              # affiche l'état de mon projet Git à cet instant
git log                                                 # affiche l'historique des commits
git log --pretty=oneline --graph                        # affiche l'historique des commits sous forme de graphique 
git restore <nom du fichier/dossier>                    # remet le contenu du fichier à l'état du dernier commit
git checkout <numéro du commit/hash>                    # Permet de nous déplacer dans le temps, dans des dimensions différentes, déplace la tête de lecture
git checkout <master>                                   # retourne au dernier commit
git checkout <nom de la branche>                        # dernier commit de la branche en question
git branch <nom de la branche>                          # créer une nouvelle branche
git branch                                              # vérifie l'existence d'une branche
git branch <nom de la branche> <nom de la branche à copier> # copie la branche désigner dans une nouvelle branche
git merge  <nom de la branche>                          # fusionne la branche nommé à l'intérieur de la branche actuelle en créant un commit
git merge <nom de la branche> -m "<message du commit>"  # même chose que la ligne précédente en fonction de l'IDE
git remote                                              # Liste les dépôt distants de notre projet git
git remote add <nom du remote> <adresse du remote>      # ajoute un nouveau dépôt distants
git push <nom du dépôt> <branche distante>              # envoie la branche courante sur la branche distante du dépôt
git push -u <nom du dépôt> < branche distante>          # idem mais paramètre la branche locale pour correspondre à la branche distante de façon permanente
git clone <nom du dépôt> <nom du dossier>               # Télécharge la branche par défaut du dépôt choisi dans le dossier voulu
git pull <nom du dépôt> <brnahce distante>              # met à jour la branche actuelle avec les modifications effectuées sur la branche distante
git push <nom du dépôt> <branche distante>