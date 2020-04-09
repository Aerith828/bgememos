/* Création d'une table : */

CREATE TABLE nom_de_la_table (
    id INT PRIMARY KEY AUTO_INCREMENT, /* colone ID (obligatoire), chiffre, clé primaire qui se remplit tout seul */
    colone_2 VARCHAR(50) NOT NULL UNIQUE, /* colone_2, chaine de caractère, ne peux pas être vide, sans doublon */
    colone_3 DATE NOT NULL, /* colone_3, date au format AAAA-MM-JJ, ne peux pas être vide */
);

/* Insertion dans une table (Create-RUD) */

INSERT INTO nom_de_la_table VALUES
    (NULL, 'valeur1', 'valeur2'), /* Ajout ligne 1, la première colonne est 'id', on met NULL */
    (NULL, 'valeur1', 'valeur2'), /* Ajout ligne 2 */
    (NULL, 'valeur1', 'valeur2'); /* Ajout ligne 3 */

/* Lecture dans une table (C-Read-UD) */

SELECT id, colone_2, colone_3
    FROM nom_de_la_table
    WHERE colone_2 = 'valeur à chercher';

/* Modification de lignes dans une table (CR-Update-D) */

UPDATE nom_de_la_table
    SET colone_2 = 'nouvelle valeur', colone_3 = 'nouvelle valeur'
    WHERE colone_3 = 'valeur à chercher'; /* ATTENTION ! sans clause WHERE, on modifie tout !! */

/* Suppression de lignes dans une table (CRU-Delete) */

DELETE nom_de_la_table
    WHERE colone_2 = 'valeur à chercher'; /* ATTENTION ! sans clause WHERE, on supprime tout !! */