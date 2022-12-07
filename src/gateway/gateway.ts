import { OnModuleInit} from "@nestjs/common"
import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MyGateWay implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit(){
    this.server.on('connection',(socket)=>{
        console.log("....data in socket",socket.id);
    })
  }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    this.server.emit('onMessage',{
        msg:'new Message',
        content: body
    })
  }
}
