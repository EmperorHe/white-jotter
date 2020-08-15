package com.hehuang.wj.dao;

import com.hehuang.wj.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author hehuang
 * @date 2020/8/1 - 10:07
 */
public interface UserDao extends JpaRepository<User, Integer> {
    User findByUsername(String name);

    User getByUsernameAndPassword(String username, String password);
}
