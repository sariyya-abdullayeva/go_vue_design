package main

import (
	"fmt"
	"log"
	"net/http"
	"realtime-form/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	// upgrade this connection to a WebSocket
	// connection
	wsConnection, err := websocket.Upgrade(w, r)
	// fmt.Println("this is ", ws)
	if err != nil {
		log.Println(err)
	}

	client := &websocket.Client{
		Conn: wsConnection,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Server")
	})

	pool := websocket.NewPool()
	go pool.Start()
	// `/ws` endpoint to the `serveWs` function
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("WebSocket Endpoint Hit, poop is", pool)
		serveWs(pool, w, r)
	})
}

var Port = ":8080"

func main() {
	fmt.Println("Distributed Chat App v0.01")
	setupRoutes()
	fmt.Println("Serving @ : ", "http://127.0.0.1"+Port)
	http.ListenAndServe(":8080", nil)
}
