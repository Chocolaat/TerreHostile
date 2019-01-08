 CREATE TABLE mapView (x_coord INT NOT NULL, y_coord INT NOT NULL, background INT, height INT, PRIMARY KEY (x_coord, y_coord));
 
 REPLACE INTO `role` VALUES (1,'ADMIN');
 
 TRUNCATE TABLE mapView;
  DROP TABLE mapView;
 
 DELIMITER $$
 DROP PROCEDURE IF EXISTS createPoints$$
 CREATE PROCEDURE createPoints(beginXY INT, endXY INT)
 BEGIN
 
 DECLARE XIndex INT;
 DECLARE YIndex INT;
 DECLARE rand INT;
 SET XIndex = beginXY;
 SET YIndex = beginXY;
 
 WHILE XIndex  <= endXY DO
	WHILE YIndex  <= endXY DO
        SET rand = RAND()*3;
		INSERT INTO mapView VALUES (XIndex, YIndex, rand, 0);
		SET  YIndex = YIndex + 1; 
    END WHILE;
 SET  XIndex = XIndex + 1; 
 SET  YIndex = beginXY; 
 END WHILE;
 
 END$$
DELIMITER ;

CALL createPoints(0, 5000);