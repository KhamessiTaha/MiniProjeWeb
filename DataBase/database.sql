-- MySQL Script generated by MySQL Workbench
-- Sun Feb 26 22:35:26 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PetMatch
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PetMatch
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PetMatch` DEFAULT CHARACTER SET utf8 ;
USE `PetMatch` ;

-- -----------------------------------------------------
-- Table `PetMatch`.`utilisateur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetMatch`.`utilisateur` (
  `id_utilisateur` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `mot_de_passe` VARCHAR(45) NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `prenom` VARCHAR(45) NOT NULL,
  `adresse_local` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `rendez-vous_num_rendezVous` INT NOT NULL,
  `rendez-vous_date` VARCHAR(45) NOT NULL,
  `rendez-vous_#id_utilisateur` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_id_utilisateur` INT NOT NULL,
  `rendez-vous_utilisateur_email` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_mot_de_passe` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_nom` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_prenom` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_adresse_local` VARCHAR(45) NOT NULL,
  `rendez-vous_utilisateur_user_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_utilisateur`, `email`, `mot_de_passe`, `nom`, `prenom`, `adresse_local`, `user_name`, `rendez-vous_num_rendezVous`, `rendez-vous_date`, `rendez-vous_#id_utilisateur`, `rendez-vous_utilisateur_id_utilisateur`, `rendez-vous_utilisateur_email`, `rendez-vous_utilisateur_mot_de_passe`, `rendez-vous_utilisateur_nom`, `rendez-vous_utilisateur_prenom`, `rendez-vous_utilisateur_adresse_local`, `rendez-vous_utilisateur_user_name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetMatch`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetMatch`.`animal` (
  `idAnimal` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `couleur` VARCHAR(45) NOT NULL,
  `poids` VARCHAR(45) NOT NULL,
  `race` VARCHAR(45) NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `type pet` VARCHAR(45) NOT NULL,
  `utilisateur_id_utilisateur` INT NOT NULL,
  `utilisateur_email` VARCHAR(45) NOT NULL,
  `utilisateur_mot_de_passe` VARCHAR(45) NOT NULL,
  `utilisateur_nom` VARCHAR(45) NOT NULL,
  `utilisateur_prenom` VARCHAR(45) NOT NULL,
  `utilisateur_adresse_local` VARCHAR(45) NOT NULL,
  `utilisateur_user_name` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_num_rendezVous` INT NOT NULL,
  `utilisateur_rendez-vous_date` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_#id_utilisateur` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_id_utilisateur` INT NOT NULL,
  `utilisateur_rendez-vous_utilisateur_email` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_mot_de_passe` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_nom` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_prenom` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_adresse_local` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_user_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAnimal`, `nom`, `couleur`, `poids`, `age`, `race`, `genre`, `type pet`, `utilisateur_id_utilisateur`, `utilisateur_email`, `utilisateur_mot_de_passe`, `utilisateur_nom`, `utilisateur_prenom`, `utilisateur_adresse_local`, `utilisateur_user_name`, `utilisateur_rendez-vous_num_rendezVous`, `utilisateur_rendez-vous_date`, `utilisateur_rendez-vous_#id_utilisateur`, `utilisateur_rendez-vous_utilisateur_id_utilisateur`, `utilisateur_rendez-vous_utilisateur_email`, `utilisateur_rendez-vous_utilisateur_mot_de_passe`, `utilisateur_rendez-vous_utilisateur_nom`, `utilisateur_rendez-vous_utilisateur_prenom`, `utilisateur_rendez-vous_utilisateur_adresse_local`, `utilisateur_rendez-vous_utilisateur_user_name`),
  INDEX `fk_animal_utilisateur1_idx` (`utilisateur_id_utilisateur` ASC, `utilisateur_email` ASC, `utilisateur_mot_de_passe` ASC, `utilisateur_nom` ASC, `utilisateur_prenom` ASC, `utilisateur_adresse_local` ASC, `utilisateur_user_name` ASC, `utilisateur_rendez-vous_num_rendezVous` ASC, `utilisateur_rendez-vous_date` ASC, `utilisateur_rendez-vous_#id_utilisateur` ASC, `utilisateur_rendez-vous_utilisateur_id_utilisateur` ASC, `utilisateur_rendez-vous_utilisateur_email` ASC, `utilisateur_rendez-vous_utilisateur_mot_de_passe` ASC, `utilisateur_rendez-vous_utilisateur_nom` ASC, `utilisateur_rendez-vous_utilisateur_prenom` ASC, `utilisateur_rendez-vous_utilisateur_adresse_local` ASC, `utilisateur_rendez-vous_utilisateur_user_name` ASC) VISIBLE,
  CONSTRAINT `fk_animal_utilisateur1`
    FOREIGN KEY (`utilisateur_id_utilisateur` , `utilisateur_email` , `utilisateur_mot_de_passe` , `utilisateur_nom` , `utilisateur_prenom` , `utilisateur_adresse_local` , `utilisateur_user_name` , `utilisateur_rendez-vous_num_rendezVous` , `utilisateur_rendez-vous_date` , `utilisateur_rendez-vous_#id_utilisateur` , `utilisateur_rendez-vous_utilisateur_id_utilisateur` , `utilisateur_rendez-vous_utilisateur_email` , `utilisateur_rendez-vous_utilisateur_mot_de_passe` , `utilisateur_rendez-vous_utilisateur_nom` , `utilisateur_rendez-vous_utilisateur_prenom` , `utilisateur_rendez-vous_utilisateur_adresse_local` , `utilisateur_rendez-vous_utilisateur_user_name`)
    REFERENCES `PetMatch`.`utilisateur` (`id_utilisateur` , `email` , `mot_de_passe` , `nom` , `prenom` , `adresse_local` , `user_name` , `rendez-vous_num_rendezVous` , `rendez-vous_date` , `rendez-vous_#id_utilisateur` , `rendez-vous_utilisateur_id_utilisateur` , `rendez-vous_utilisateur_email` , `rendez-vous_utilisateur_mot_de_passe` , `rendez-vous_utilisateur_nom` , `rendez-vous_utilisateur_prenom` , `rendez-vous_utilisateur_adresse_local` , `rendez-vous_utilisateur_user_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PetMatch`.`rendez-vous`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PetMatch`.`rendez-vous` (
  `num_rendezVous` INT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `#id_utilisateur` VARCHAR(45) NOT NULL,
  `utilisateur_id_utilisateur` INT NOT NULL,
  `utilisateur_email` VARCHAR(45) NOT NULL,
  `utilisateur_mot_de_passe` VARCHAR(45) NOT NULL,
  `utilisateur_nom` VARCHAR(45) NOT NULL,
  `utilisateur_prenom` VARCHAR(45) NOT NULL,
  `utilisateur_adresse_local` VARCHAR(45) NOT NULL,
  `utilisateur_user_name` VARCHAR(45) NOT NULL,
  `utilisateur_id_utilisateur1` INT NOT NULL,
  `utilisateur_email1` VARCHAR(45) NOT NULL,
  `utilisateur_mot_de_passe1` VARCHAR(45) NOT NULL,
  `utilisateur_nom1` VARCHAR(45) NOT NULL,
  `utilisateur_prenom1` VARCHAR(45) NOT NULL,
  `utilisateur_adresse_local1` VARCHAR(45) NOT NULL,
  `utilisateur_user_name1` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_num_rendezVous` INT NOT NULL,
  `utilisateur_rendez-vous_date` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_#id_utilisateur` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_id_utilisateur` INT NOT NULL,
  `utilisateur_rendez-vous_utilisateur_email` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_mot_de_passe` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_nom` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_prenom` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_adresse_local` VARCHAR(45) NOT NULL,
  `utilisateur_rendez-vous_utilisateur_user_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`num_rendezVous`, `date`, `#id_utilisateur`, `utilisateur_id_utilisateur`, `utilisateur_email`, `utilisateur_mot_de_passe`, `utilisateur_nom`, `utilisateur_prenom`, `utilisateur_adresse_local`, `utilisateur_user_name`, `utilisateur_id_utilisateur1`, `utilisateur_email1`, `utilisateur_mot_de_passe1`, `utilisateur_nom1`, `utilisateur_prenom1`, `utilisateur_adresse_local1`, `utilisateur_user_name1`, `utilisateur_rendez-vous_num_rendezVous`, `utilisateur_rendez-vous_date`, `utilisateur_rendez-vous_#id_utilisateur`, `utilisateur_rendez-vous_utilisateur_id_utilisateur`, `utilisateur_rendez-vous_utilisateur_email`, `utilisateur_rendez-vous_utilisateur_mot_de_passe`, `utilisateur_rendez-vous_utilisateur_nom`, `utilisateur_rendez-vous_utilisateur_prenom`, `utilisateur_rendez-vous_utilisateur_adresse_local`, `utilisateur_rendez-vous_utilisateur_user_name`),
  INDEX `fk_rendez-vous_utilisateur1_idx` (`utilisateur_id_utilisateur1` ASC, `utilisateur_email1` ASC, `utilisateur_mot_de_passe1` ASC, `utilisateur_nom1` ASC, `utilisateur_prenom1` ASC, `utilisateur_adresse_local1` ASC, `utilisateur_user_name1` ASC, `utilisateur_rendez-vous_num_rendezVous` ASC, `utilisateur_rendez-vous_date` ASC, `utilisateur_rendez-vous_#id_utilisateur` ASC, `utilisateur_rendez-vous_utilisateur_id_utilisateur` ASC, `utilisateur_rendez-vous_utilisateur_email` ASC, `utilisateur_rendez-vous_utilisateur_mot_de_passe` ASC, `utilisateur_rendez-vous_utilisateur_nom` ASC, `utilisateur_rendez-vous_utilisateur_prenom` ASC, `utilisateur_rendez-vous_utilisateur_adresse_local` ASC, `utilisateur_rendez-vous_utilisateur_user_name` ASC) VISIBLE,
  CONSTRAINT `fk_rendez-vous_utilisateur1`
    FOREIGN KEY (`utilisateur_id_utilisateur1` , `utilisateur_email1` , `utilisateur_mot_de_passe1` , `utilisateur_nom1` , `utilisateur_prenom1` , `utilisateur_adresse_local1` , `utilisateur_user_name1` , `utilisateur_rendez-vous_num_rendezVous` , `utilisateur_rendez-vous_date` , `utilisateur_rendez-vous_#id_utilisateur` , `utilisateur_rendez-vous_utilisateur_id_utilisateur` , `utilisateur_rendez-vous_utilisateur_email` , `utilisateur_rendez-vous_utilisateur_mot_de_passe` , `utilisateur_rendez-vous_utilisateur_nom` , `utilisateur_rendez-vous_utilisateur_prenom` , `utilisateur_rendez-vous_utilisateur_adresse_local` , `utilisateur_rendez-vous_utilisateur_user_name`)
    REFERENCES `PetMatch`.`utilisateur` (`id_utilisateur` , `email` , `mot_de_passe` , `nom` , `prenom` , `adresse_local` , `user_name` , `rendez-vous_num_rendezVous` , `rendez-vous_date` , `rendez-vous_#id_utilisateur` , `rendez-vous_utilisateur_id_utilisateur` , `rendez-vous_utilisateur_email` , `rendez-vous_utilisateur_mot_de_passe` , `rendez-vous_utilisateur_nom` , `rendez-vous_utilisateur_prenom` , `rendez-vous_utilisateur_adresse_local` , `rendez-vous_utilisateur_user_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
