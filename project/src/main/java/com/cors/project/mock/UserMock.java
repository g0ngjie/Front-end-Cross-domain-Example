package com.cors.project.mock;

import com.cors.project.vo.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Component
public class UserMock {

    public List<User> userList() {
        List<User> users = Arrays.asList(
                "张三", "里斯", "王五", "赵六",
                "xxx", "yyy"
        ).stream().map(name -> {
            User user = new User();
            user.setName(name);
            user.setCity("Shanghai");
            user.setGender(new Random().nextInt(1));
            user.setAge(new Random().nextInt(18) + 1);
            return user;
        }).collect(Collectors.toList());
        return users;
    }

    public User userInfo() {
        User user = new User();
        user.setName("张三");
        user.setCity("Shanghai");
        user.setGender(new Random().nextInt(1));
        user.setAge(new Random().nextInt(18) + 1);
        return user;
    }

}
