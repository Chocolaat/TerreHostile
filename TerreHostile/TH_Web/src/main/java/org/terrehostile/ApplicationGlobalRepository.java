
package org.terrehostile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationGlobalRepository extends JpaRepository<ApplicationGlobalModel, Integer> {

}
