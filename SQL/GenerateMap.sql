DELIMITER $$
 DROP PROCEDURE IF EXISTS createPoints$$
 CREATE PROCEDURE createPoints(beginXY INT, endXY INT)
 BEGIN
 
 DECLARE XIndex INT;
 DECLARE YIndex INT;
 SET XIndex = beginXY;
 SET YIndex = beginXY;
 
 WHILE XIndex  <= endXY DO
	WHILE YIndex  <= endXY DO
		INSERT INTO mapView VALUES (XIndex, YIndex, FLOOR(RAND()*(3-0+1)+0), 0);
		SET  YIndex = YIndex + 1; 
    END WHILE;
 SET  XIndex = XIndex + 1; 
 SET  YIndex = beginXY; 
 END WHILE;
 
 END$$
DELIMITER ;


CALL createPoints(0, 1000);