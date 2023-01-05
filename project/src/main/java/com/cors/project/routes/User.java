package com.cors.project.routes;

import com.cors.project.dto.PageDto;
import com.cors.project.dto.ResultDto;
import com.cors.project.mock.UserMock;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class User {

    private final UserMock userMock;

    public User(UserMock userMock) {
        this.userMock = userMock;
    }

    @GetMapping("{id}")
    public com.cors.project.vo.User userInfo(@PathVariable("id") int userId) {
        return userMock.userInfo();
    }

    @PostMapping()
    public List<com.cors.project.vo.User> userInfo(@RequestBody PageDto params) {
        return userMock.userList();
    }

    @DeleteMapping("{id}")
    public ResultDto userDel(@PathVariable("id") int userId) {
        ResultDto res = new ResultDto();
        res.setCode("000000");
        res.setMsg("删除成功");
        return res;
    }
}
