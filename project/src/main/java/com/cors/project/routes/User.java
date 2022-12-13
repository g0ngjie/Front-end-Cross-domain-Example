package com.cors.project.routes;

import com.cors.project.dto.PageDto;
import com.cors.project.dto.ResultDto;
import com.cors.project.mock.UserMock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class User {

    @Autowired
    private UserMock userMock;

    @GetMapping("{id}")
    @ResponseBody
    public com.cors.project.vo.User userInfo(@PathVariable("id") int userId) {
        return userMock.userInfo();
    }

    @PostMapping()
    @ResponseBody
    public List<com.cors.project.vo.User> userInfo(@RequestBody PageDto params) {
        return userMock.userList();
    }

    @DeleteMapping("{id}")
    @ResponseBody
    public ResultDto userDel(@PathVariable("id") int userId) {
        ResultDto res = new ResultDto();
        res.setCode("000000");
        res.setMsg("删除成功");
        return res;
    }
}
