# graph(V,E)
# v - vertices
# e - edges

# 0 - 1 - 3
# |
# 2
# queue  = 0 1 3 2
# 1 , 2
# 3

from collections import defaultdict

class Graph:

    def __init__(self):
        self.graph = defaultdict(list):

    def addEdge(self,u,v):
        self.graph[u].append(v)

    def BFS(self,s):
        visited = [False]*len(self.graph)

        queue = []

        queue.append(s)
        visited[s] = True

        while queue:
            s = queue.pop(0)
            print(s,end=" ")

            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(s)
                    visited[s] = True
                    

# visited = True
# queue = [0,1]
g = Graph()
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)

g.BFS(0)

# graph ={[0:1,2],{1:3},{3:1},{2:1}}}

    

